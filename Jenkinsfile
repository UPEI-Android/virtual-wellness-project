pipeline {
	agent any
	stages {
		stage("build"){
			steps{
				sh 'php --version'
				sh 'composer global require laravel/installer'
                sh 'composer install'
                sh 'composer --version'
                sh 'cp .env.example .env'
                sh 'php artisan key:generate'
			}
		}

		stage("test"){
			steps{
				sh 'php artisan test'
			}
			
		}

		stage("deploy"){
			steps{
				echo 'Deploying app'
			}
		}
	}
}