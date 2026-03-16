pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo "Cloning repository"
                git 'https://github.com/VivekanandaMuttaluri/MyPortfolio.git'
            }
        }

        stage('Build') {
            steps {
                echo "Building application"
                sh 'echo Build Step'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests"
                sh 'echo Test Step'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying application"
                sh 'echo Deploy Step'
            }
        }

    }
}
