---
sidebar_position: 3
---
# BUSTED-BOOST.boot

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/rcutorture/configs/rcu/BUSTED-BOOST.boot`

### コンテンツ

```boot
rcutorture.test_boost=2
rcutorture.stutter=0
rcutree.gp_preinit_delay=12
rcutree.gp_init_delay=3
rcutree.gp_cleanup_delay=3
rcutree.kthread_prio=2
threadirqs
rcutree.use_softirq=0

```
