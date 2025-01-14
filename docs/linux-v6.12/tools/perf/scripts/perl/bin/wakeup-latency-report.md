---
sidebar_position: 11
---
# wakeup-latency-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/perl/bin/wakeup-latency-report`

### コンテンツ

```txt
#!/bin/bash
# description: system-wide min/max/avg wakeup latency
perf script $@ -s "$PERF_EXEC_PATH"/scripts/perl/wakeup-latency.pl

```
