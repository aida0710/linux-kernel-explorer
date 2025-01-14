---
sidebar_position: 10
---
# failed-syscalls-by-pid-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/failed-syscalls-by-pid-report`

### コンテンツ

```txt
#!/bin/bash
# description: system-wide failed syscalls, by pid
# args: [comm]
if [ $# -gt 0 ] ; then
    if ! expr match "$1" "-" > /dev/null ; then
	comm=$1
	shift
    fi
fi
perf script $@ -s "$PERF_EXEC_PATH"/scripts/python/failed-syscalls-by-pid.py $comm

```
