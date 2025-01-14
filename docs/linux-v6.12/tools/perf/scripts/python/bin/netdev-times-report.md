---
sidebar_position: 22
---
# netdev-times-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/netdev-times-report`

### コンテンツ

```txt
#!/bin/bash
# description: display a process of packet and processing time
# args: [tx] [rx] [dev=] [debug]

perf script -s "$PERF_EXEC_PATH"/scripts/python/netdev-times.py $@

```
