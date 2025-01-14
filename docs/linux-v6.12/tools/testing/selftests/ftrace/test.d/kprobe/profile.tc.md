---
sidebar_position: 26
---
# profile.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/kprobe/profile.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: Kprobe profile
# requires: kprobe_events

! grep -q 'myevent' kprobe_profile
echo "p:myevent $FUNCTION_FORK" > kprobe_events
grep -q 'myevent[[:space:]]*0[[:space:]]*0$' kprobe_profile
echo 1 > events/kprobes/myevent/enable
( echo "forked" )
grep -q 'myevent[[:space:]]*[[:digit:]]*[[:space:]]*0$' kprobe_profile
echo 0 > events/kprobes/myevent/enable
echo > kprobe_events
! grep -q 'myevent' kprobe_profile

```
