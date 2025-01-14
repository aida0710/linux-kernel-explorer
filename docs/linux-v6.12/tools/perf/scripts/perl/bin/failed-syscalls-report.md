---
sidebar_position: 3
---
# failed-syscalls-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/perl/bin/failed-syscalls-report`

### コンテンツ

```txt
#!/bin/bash
# description: system-wide failed syscalls
# args: [comm]
if [ $# -gt 0 ] ; then
    if ! expr match "$1" "-" > /dev/null ; then
	comm=$1
	shift
    fi
fi
perf script $@ -s "$PERF_EXEC_PATH"/scripts/perl/failed-syscalls.pl $comm

```
