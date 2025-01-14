---
sidebar_position: 1
---
# trigger-action-hist-xfail.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/trigger/inter-event/trigger-action-hist-xfail.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: event trigger - test inter-event histogram trigger expected fail actions
# requires: set_event snapshot "snapshot()":README

fail() { #msg
    echo $1
    exit_fail
}

echo "Test expected snapshot action failure"

echo 'hist:keys=comm:onmatch(sched.sched_wakeup).snapshot()' >> events/sched/sched_waking/trigger && exit_fail

echo "Test expected save action failure"

echo 'hist:keys=comm:onmatch(sched.sched_wakeup).save(comm,prio)' >> events/sched/sched_waking/trigger && exit_fail

exit_xfail

```
