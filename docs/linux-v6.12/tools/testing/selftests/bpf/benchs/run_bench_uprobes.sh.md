---
sidebar_position: 25
---
# run_bench_uprobes.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/benchs/run_bench_uprobes.sh`

### コンテンツ

```sh
#!/bin/bash

set -eufo pipefail

for i in usermode-count syscall-count {uprobe,uretprobe}-{nop,push,ret}
do
	summary=$(sudo ./bench -w2 -d5 -a trig-$i | tail -n1 | cut -d'(' -f1 | cut -d' ' -f3-)
	printf "%-15s: %s\n" $i "$summary"
done

```
