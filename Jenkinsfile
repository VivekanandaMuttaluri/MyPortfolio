pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo "Building portfolio project"
                sh 'ls -la'
            }
        }

        stage('Test') {
            steps {
                echo "Testing project"
                sh 'echo Tests passed'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying project"
                sh 'echo Deployment step'
            }
        }

    }
}
