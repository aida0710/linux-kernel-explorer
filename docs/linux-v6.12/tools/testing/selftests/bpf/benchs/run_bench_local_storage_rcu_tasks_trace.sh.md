---
sidebar_position: 20
---
# run_bench_local_storage_rcu_tasks_trace.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/benchs/run_bench_local_storage_rcu_tasks_trace.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

kthread_pid=`pgrep rcu_tasks_trace_kthread`

if [ -z $kthread_pid ]; then
	echo "error: Couldn't find rcu_tasks_trace_kthread"
	exit 1
fi

./bench --nr_procs 15000 --kthread_pid $kthread_pid -d 600 --quiet local-storage-tasks-trace

```
