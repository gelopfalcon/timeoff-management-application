pipeline {
    agent any
    stages {
        stage('Build and install') {
            steps {
                echo "Step 1: Installing dependencies"
                sh 'npm ci'
            }

        }

        stage('Running test') {
            steps {
                echo "Step 1: Test"
                sh 'npm test'
            }
        }

        stage('Build image and push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-registry', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh ' echo "$PASSWORD" | docker login --username=$USERNAME --password-stdin'
                    echo "Step 1: Build Docker image"
                    sh 'docker build -t glgelopfalcon/timeoff:${BUILD_NUMBER} .'
                    sh 'docker push glgelopfalcon/timeoff:${BUILD_NUMBER}'
            }
         }
        }

        stage('Deploy') {
            steps {
                sh 'sudo kubectl config set-context $(kubectl config current-context) --namespace development'
                sed -i 's/\/glgelopfalcon/timeoff:.*/\/glgelopfalcon/timeoff:${BUILD_NUMBER}/' time-off-deployment.yml
                sh 'sudo kubectl apply -f  time-off-deployment.yml'
            }
        } 
    }
}
