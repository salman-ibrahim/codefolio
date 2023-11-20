import { useEffect, useState } from "react"
import Tooltip from "./Elements/Tooltip"
import { Chrome, Copyright, Eye, Fullscreen, GitBranch, GitFork, Github, Hash, Scale, Star } from "lucide-react"
import values from "@/values/strings.json"

type License = {
    key: string,
    name: string,
    url: string,
}

type RepositoryData = {
    stargazers_count: number,
    forks_count: number,
    watchers_count: number,
    license: License,
}

function StatusBar() {

    const [isChrome, setIsChrome] = useState<boolean>(false)
    const [repositoryData, setRepositoryData] = useState<RepositoryData>({} as RepositoryData)

    const fetchRepositoryData = async () => {
        // make fetch request with above using fetch api
        // Add X-GitHub-Api-Version: 2022-11-28 header to request
        const headers = new Headers()
        headers.append('Accept', 'application/vnd.github.v3+json')
        headers.append('X-GitHub-Api-Version', '2022-11-28')
        headers.append('Authorization', `token ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`)
        const response = await fetch('https://api.github.com/repos/salman-ibrahim/codefolio', {
            headers: headers
        })
        const data = await response.json()
        setRepositoryData(data)
    }

    useEffect(() => {
        fetchRepositoryData()
        setIsChrome(isChromeBrowser())
    }, [])

    function isChromeBrowser() {
        return navigator.userAgent.indexOf("Chrome") !== -1
    }

    const toggleFullscreen = () => {
        const elem = document.documentElement
        if (!document.fullscreenElement) {
            elem.requestFullscreen()
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            }
        }
    }

    return (
        <div id="status-bar">
            <div className="left">
                <div className="status-item items-center">
                    <GitBranch size={12} />
                    <span className="ml-1">gh-pages</span>
                </div>
                {
                    repositoryData?.watchers_count !== undefined
                    &&
                    <Tooltip text="Watchers">
                    <div className="status-item items-center">
                        <Eye size={12} />
                        <span className="ml-1">{repositoryData?.watchers_count}</span>
                    </div>
                    </Tooltip>
                }
                {
                    repositoryData?.forks_count !== undefined
                    &&
                    <Tooltip text="Forks">
                    <div className="status-item items-center">
                        <GitFork size={12} />
                        <span className="ml-1">{repositoryData?.forks_count}</span>
                    </div>
                    </Tooltip>
                }
                {
                    repositoryData?.stargazers_count !== undefined
                    &&
                    <Tooltip text="Stars">
                    <div className="status-item items-center">
                        <Star size={12} />
                        <span className="ml-1">{repositoryData?.stargazers_count}</span>
                    </div>
                    </Tooltip>
                }
                {
                    !isChrome
                    &&
                    <div className="status-item items-center">
                        <Chrome size={12} />
                        <span className="ml-1">Better in Chrome</span>
                    </div>
                }
            </div>
            <div className="right">
                <div className="status-item items-center">
                    <Copyright size={12} />
                    <span className="ml-1">2023 • Codefolio</span>
                </div>
                <div className="status-item items-center">
                    <Hash size={12} />
                    <span className="ml-1">CSS</span>
                </div>

                <a className="unstyled-link" href={repositoryData?.license?.url} target="_blank" rel="noreferrer">
                    <div className="status-item items-center">
                        <Scale size={12} />
                        <span className="ml-1">MIT</span>
                    </div>
                </a>

                <a className="unstyled-link" href={values.github} target="_blank" rel="noreferrer">
                    <div className="status-item items-center">
                            <Github size={12} />
                            <span className="ml-1">GitHub</span>
                    </div>
                </a>

                <div className="status-item items-center" onClick={toggleFullscreen}>
                    <Fullscreen size={12} />
                </div>
            </div>
        </div>
    )
}

export default StatusBar