---
sidebar_position: 12
---
# flamegraph-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/flamegraph-report`

### コンテンツ

```txt
#!/bin/bash
# description: create flame graphs
perf script -s "$PERF_EXEC_PATH"/scripts/python/flamegraph.py -- "$@"

```
