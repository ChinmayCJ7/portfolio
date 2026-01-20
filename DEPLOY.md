# Deployment Instructions for "New Year, New You" Portfolio Challenge

## Prerequisites

- A Google Cloud Platform (GCP) Account.
- A GitHub repository for this portfolio.

## Steps to Deploy to Google Cloud Run

1.  **Push to GitHub**
    Push your code to a new public repository on GitHub.

    ```bash
    git init
    git add .
    git commit -m "Initial portfolio commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

2.  **Go to Google Cloud Run**
    - Visit [Google Cloud Run Console](https://console.cloud.google.com/run).
    - Click **"Create Service"**.

3.  **Configure Service**
    - **Source**: Select **"Continuously deploy from a repository"**.
    - **Repository**: Click "SET UP CLOUD BUILD" if needed, and select your GitHub repository.
    - **Build Configuration**:
      - Select **"Dockerfile"**.
      - Source location: `/` (root).
    - **Service Name**: e.g., `portfolio-challenge`.
    - **Region**: Select a region (e.g., `us-central1`).
    - **Authentication**: Select **"Allow unauthenticated invocations"** (Check this to make your portfolio public).

4.  **Create**
    - Click **"Create"**.
    - Wait for the build and deployment to finish.
    - Once done, you will get a **Service URL** (e.g., `https://portfolio-challenge-xyz-uc.a.run.app`).

## Submission

1.  **Create DEV Post**
    - Go to [DEV Community](https://dev.to/new).
    - Create a new post with your portfolio details.
    - **IMPORTANT**: Add the required label in the frontmatter or tags:
      ```
      labels: dev-tutorial=devnewyear2026
      ```
    - Embed your portfolio using the Cloud Run embed feature (if applicable) or simply link to it.

## Notes

- This project is configured with a `Dockerfile` and `nginx.conf` optimized for React/Vite.
- `npm run build` has been verified to work.

Good luck with the challenge! 🚀
