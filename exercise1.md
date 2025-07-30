## CI Setup for Go

To start off with, we will use Go build for compiling code into executable binaries, and Go mod for dependency management.

For testing we will use go test, there is a standard testing library package that is built into Go. It covers Unit tests, benchmarking, coverage, code demonstration and also fuzzing which basically automatically finds bugs by inputting random data.

Lastly, for linting we will use `golangci-lint` with `gofmt` for comprehensive linting and `gofmt` for formatting. `Golangci-lint` is meta-linter, which means that it runs multiple linters, so that covers unused imports and variables, bad practices and logical errors, and it also runs `go vet` which detects common errors and suspicious constructs.

## Github Actions and Jenkins alternatives

If we are going to use GitLab for source code management, we should use GitLab CI/CD. Otherwise, we can use Azure DevOps if we are going with Azure or TeamCity by JetBrains which is will work great if we pick GoLand for our IDE of choice. There are also loads of other tools but these are some of the bigger ones.

## Self-hosted or Cloud-based

I think our setup would be better off being cloud-based, since as a small team we most likely don't have capability for on-premise servers. Also, the upkeeping costs would more likely be lower with a cloud-based than a self-hosted solution since servers draw a lot of power. As 6 person team, it is also better since if we went for a self-hosted, we would need a whole person dedicated for infrastructure so with cloud-based we can focus more on the code. It is also quite fast to setup and has built in scalability.
