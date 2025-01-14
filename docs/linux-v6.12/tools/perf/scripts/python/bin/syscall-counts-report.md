---
sidebar_position: 36
---
# syscall-counts-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/syscall-counts-report`

### コンテンツ

```txt
#!/bin/bash
# description: system-wide syscall counts
# args: [comm]
if [ $# -gt 0 ] ; then
    if ! expr match "$1" "-" > /dev/null ; then
	comm=$1
	shift
    fi
fi
perf script $@ -s "$PERF_EXEC_PATH"/scripts/python/syscall-counts.py $comm

```
