@servers(['web' => 'ubuntu@148.113.6.180'])

@setup
    //  project domain but replace - (dashes) instead of . (dots)
    $domain = 'b2c-dev-tripklik-com';
    $repository = 'git@bitbucket.org:tqniatlab/tripklikb2c.git';
    $releases_dir = '/var/www/html/'. $domain .'/releases';
    $app_dir = '/var/www/html/' . $domain ;
    $release = date('YmdHis');
    $new_release_dir = $releases_dir .'/'. $release;
@endsetup

@task('deploy', ['on' => 'web'])
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    echo "sudo ln -sfn {{ $app_dir }}/current {{ $new_release_dir }}"
    echo 'Cloning repository'
    [ -d {{ $releases_dir }} ] || mkdir {{ $releases_dir }}
    echo "git clone --depth 1 -b {{ $branch }} {{ $repository }} {{ $new_release_dir }}"
    git clone --depth 1 -b {{ $branch }} {{ $repository }} {{ $new_release_dir }}
    cd {{ $new_release_dir }}
    git reset --hard {{ $commit }}

    sudo ln -s {{ $app_dir }}/.env {{ $new_release_dir }}/.env

    nvm install 20.5
    node --version
    npm install --legacy-peer-deps
    npm run build


    sudo ln -sfn  {{ $new_release_dir }}  {{ $app_dir }}/current

    cd {{ $app_dir }}/current

    pm2 delete "{{ $domain }}"
    pm2 start npm --name b2c-dev-tripklik-com -- run start --

    echo "Deployment completed."
@endtask