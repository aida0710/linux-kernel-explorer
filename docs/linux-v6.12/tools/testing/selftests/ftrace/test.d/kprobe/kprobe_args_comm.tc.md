---
sidebar_position: 5
---
# kprobe_args_comm.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/kprobe/kprobe_args_comm.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: Kprobe event with comm arguments
# requires: kprobe_events

grep -A1 "fetcharg:" README | grep -q "\$comm" || exit_unsupported # this is too old

echo "p:testprobe $FUNCTION_FORK comm=\$comm " > kprobe_events
grep testprobe kprobe_events | grep -q 'comm=$comm'
test -d events/kprobes/testprobe

echo 1 > events/kprobes/testprobe/enable
( echo "forked")
grep testprobe trace | grep -q 'comm=".*"'

exit 0

```
