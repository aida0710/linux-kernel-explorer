---
sidebar_position: 34
---
# TREE01.boot

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/rcutorture/configs/rcu/TREE01.boot`

### コンテンツ

```boot
maxcpus=8 nr_cpus=43
rcutree.gp_preinit_delay=3
rcutree.gp_init_delay=3
rcutree.gp_cleanup_delay=3
rcu_nocbs=0-1,3-7
rcutorture.nocbs_nthreads=8
rcutorture.nocbs_toggle=1000
rcutorture.fwd_progress=0

```
