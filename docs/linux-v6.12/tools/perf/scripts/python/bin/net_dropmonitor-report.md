---
sidebar_position: 24
---
# net_dropmonitor-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/net_dropmonitor-report`

### コンテンツ

```txt
#!/bin/bash
# description: display a table of dropped frames

perf script -s "$PERF_EXEC_PATH"/scripts/python/net_dropmonitor.py $@

```
