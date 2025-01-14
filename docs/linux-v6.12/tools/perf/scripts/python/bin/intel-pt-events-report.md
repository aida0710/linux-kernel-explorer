---
sidebar_position: 18
---
# intel-pt-events-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/intel-pt-events-report`

### コンテンツ

```txt
#!/bin/bash
# description: print Intel PT Events including Power Events and PTWRITE
perf script $@ -s "$PERF_EXEC_PATH"/scripts/python/intel-pt-events.py

```
