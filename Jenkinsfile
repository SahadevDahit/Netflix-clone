pipeline {
    agent any
    
    environment {
        PATH = "/opt/sonar-scanner/sonar-scanner-4.6.2.2472-linux/bin:$PATH"
        DOCKER_IMAGE_NAME = "dahitsahadev/netflix"
        DOCKER_IMAGE_TAG = "latest"
        SONAR_HOST_URL = 'http://3.111.168.66:9000'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your Git repository
                git branch: 'main',
                url: 'https://github.com/SahadevDahit/Netflix-clone'
            }
        }
        stage('TRIVY FS SCAN') {
            steps {
                sh "trivy fs . > trivyfs.txt"
            }
        }
        stage('Remove Existing Docker Image') {
            steps {
                // Remove the Docker image if it exists
               sh 'sudo docker rmi --force $(sudo docker images -a -q) || true'
       }
        }
        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    sh "docker build --rm -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} ."
                }
            }
        }
        stage('Push Docker Image to Registry') {
            steps {
                // Push the Docker image to the registry
                withCredentials([usernamePassword(credentialsId: 'docker_hub_credentials', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    script {
                        sh "echo ${DOCKERHUB_PASSWORD} | docker login -u ${DOCKERHUB_USERNAME} --password-stdin"
                        sh "docker push ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
                    }
                }
            }
        }
        stage("TRIVY") {
            steps {
                sh "trivy image ashfaque9x/swiggy-clone:latest > trivyimage.txt"
            }
        }
        stage('SonarQube Analysis') {
            steps {
                // Perform SonarQube analysis
                withSonarQubeEnv('sonar_qube') {
                    sh """
                    sonar-scanner \
                        -Dsonar.projectKey=test \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=${SONAR_HOST_URL} \
                        -Dsonar.login=sqp_06a175a267421a6393fa2fb5e61c2fa70b67cc91
                    """
                }
            }
        }
    }
    
    post {
        success {
            echo 'Build successful! Deploy your application.'
            emailext (
                subject: "Jenkins Pipeline Successful",
                body: "Your Jenkins pipeline has completed successfully.",
                to: "dahitlalpur@gmail.com"
            )
        }
        failure {
            echo 'Build failed! Check the logs for errors.'
            emailext (
                subject: "Jenkins Pipeline Failed",
                body: "Your Jenkins pipeline has failed. Please check the logs for errors.",
                to: "dahitlalpur@gmail.com"
            )
        }
    }
}
