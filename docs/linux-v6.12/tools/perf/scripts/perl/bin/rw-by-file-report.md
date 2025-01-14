---
sidebar_position: 5
---
# rw-by-file-report

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/perl/bin/rw-by-file-report`

### コンテンツ

```txt
#!/bin/bash
# description: r/w activity for a program, by file
# args: <comm>
if [ $# -lt 1 ] ; then
    echo "usage: rw-by-file <comm>"
    exit
fi
comm=$1
shift
perf script $@ -s "$PERF_EXEC_PATH"/scripts/perl/rw-by-file.pl $comm

```
