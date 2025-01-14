---
sidebar_position: 19
---
# hw_stats_l3.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/mlxsw/hw_stats_l3.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

lib_dir=$(dirname $0)/../../../net/forwarding

ALL_TESTS="
	l3_monitor_test
"
NUM_NETIFS=0
source $lib_dir/lib.sh

swp=$NETIF_NO_CABLE

cleanup()
{
	pre_cleanup
}

l3_monitor_test()
{
	hw_stats_monitor_test $swp l3		    \
		"ip addr add dev $swp 192.0.2.1/28" \
		"ip addr del dev $swp 192.0.2.1/28"
}

trap cleanup EXIT

setup_wait
tests_run

exit $EXIT_STATUS

```
