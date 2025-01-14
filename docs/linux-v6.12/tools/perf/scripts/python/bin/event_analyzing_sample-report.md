---
sidebar_position: 4
---
# event_analyzing_sample-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/event_analyzing_sample-report`

### コンテンツ

```txt
#!/bin/bash
# description: analyze all perf samples
perf script $@ -s "$PERF_EXEC_PATH"/scripts/python/event_analyzing_sample.py

```
