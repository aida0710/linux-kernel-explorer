---
sidebar_position: 31
---
# stackcollapse-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/stackcollapse-record`

### コンテンツ

```txt
#!/bin/sh

#
# stackcollapse.py can cover all type of perf samples including
# the tracepoints, so no special record requirements, just record what
# you want to analyze.
#
perf record "$@"

```
