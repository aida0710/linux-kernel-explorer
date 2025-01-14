---
sidebar_position: 70
---
# write_hugetlb_memory.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/mm/write_hugetlb_memory.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

set -e

size=$1
populate=$2
write=$3
cgroup=$4
path=$5
method=$6
private=$7
want_sleep=$8
reserve=$9

echo "Putting task in cgroup '$cgroup'"
echo $$ > ${cgroup_path:-/dev/cgroup/memory}/"$cgroup"/cgroup.procs

echo "Method is $method"

set +e
./write_to_hugetlbfs -p "$path" -s "$size" "$write" "$populate" -m "$method" \
      "$private" "$want_sleep" "$reserve"

```
