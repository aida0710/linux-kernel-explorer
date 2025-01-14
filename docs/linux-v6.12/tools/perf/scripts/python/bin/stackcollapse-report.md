---
sidebar_position: 32
---
# stackcollapse-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/stackcollapse-report`

### コンテンツ

```txt
#!/bin/sh
# description: produce callgraphs in short form for scripting use
perf script -s "$PERF_EXEC_PATH"/scripts/python/stackcollapse.py "$@"

```
