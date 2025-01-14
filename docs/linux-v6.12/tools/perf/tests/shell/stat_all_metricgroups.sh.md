---
sidebar_position: 27
---
# stat_all_metricgroups.sh

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/shell/stat_all_metricgroups.sh`

### コンテンツ

```sh
#!/bin/sh
# perf all metricgroups test
# SPDX-License-Identifier: GPL-2.0

set -e

ParanoidAndNotRoot()
{
  [ "$(id -u)" != 0 ] && [ "$(cat /proc/sys/kernel/perf_event_paranoid)" -gt $1 ]
}

system_wide_flag="-a"
if ParanoidAndNotRoot 0
then
  system_wide_flag=""
fi

for m in $(perf list --raw-dump metricgroups)
do
  echo "Testing $m"
  perf stat -M "$m" $system_wide_flag sleep 0.01
done

exit 0

```
