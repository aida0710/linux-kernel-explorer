---
sidebar_position: 38
---
# TREE03.boot

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/rcutorture/configs/rcu/TREE03.boot`

### コンテンツ

```boot
rcutorture.onoff_interval=200 rcutorture.onoff_holdoff=30
rcutree.gp_preinit_delay=12
rcutree.gp_init_delay=3
rcutree.gp_cleanup_delay=3
rcutree.kthread_prio=2
threadirqs
rcutree.use_softirq=0

```
