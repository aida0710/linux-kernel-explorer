---
sidebar_position: 7
---
# rw-by-pid-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/perl/bin/rw-by-pid-report`

### コンテンツ

```txt
#!/bin/bash
# description: system-wide r/w activity
perf script $@ -s "$PERF_EXEC_PATH"/scripts/perl/rw-by-pid.pl

```
