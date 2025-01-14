---
sidebar_position: 2
---
# compaction-times-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/compaction-times-report`

### コンテンツ

```txt
#!/bin/bash
#description: display time taken by mm compaction
#args: [-h] [-u] [-p|-pv] [-t | [-m] [-fs] [-ms]] [pid|pid-range|comm-regex]
perf script -s "$PERF_EXEC_PATH"/scripts/python/compaction-times.py $@

```
