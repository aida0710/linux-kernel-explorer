---
sidebar_position: 12
---
# SRCU-N

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/rcutorture/configs/rcu/SRCU-N`

### コンテンツ

```txt
CONFIG_RCU_TRACE=n
CONFIG_SMP=y
CONFIG_NR_CPUS=4
CONFIG_HOTPLUG_CPU=y
CONFIG_PREEMPT_NONE=y
CONFIG_PREEMPT_VOLUNTARY=n
CONFIG_PREEMPT=n
#CHECK#CONFIG_RCU_EXPERT=n
CONFIG_KPROBES=n
CONFIG_FTRACE=n

```
