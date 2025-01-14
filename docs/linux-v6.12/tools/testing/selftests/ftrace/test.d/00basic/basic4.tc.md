---
sidebar_position: 4
---
# basic4.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/00basic/basic4.tc`

### コンテンツ

```tc
#!/bin/sh
# description: Basic event tracing check
test -f available_events -a -f set_event -a -d events
# check scheduler events are available
grep -q sched available_events && exit_pass || exit_fail

```
