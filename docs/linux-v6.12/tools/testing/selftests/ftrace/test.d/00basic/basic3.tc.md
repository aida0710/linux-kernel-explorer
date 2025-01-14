---
sidebar_position: 3
---
# basic3.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/00basic/basic3.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: Basic trace clock test
# flags: instance
test -f trace_clock
for c in `cat trace_clock | tr  -d \[\]`; do
  echo $c > trace_clock
  grep '\['$c'\]' trace_clock
done
echo local > trace_clock

```
