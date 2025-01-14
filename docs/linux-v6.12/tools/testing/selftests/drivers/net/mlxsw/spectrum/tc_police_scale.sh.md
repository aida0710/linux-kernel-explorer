---
sidebar_position: 12
---
# tc_police_scale.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/mlxsw/spectrum/tc_police_scale.sh`

### コンテンツ

```sh
# SPDX-License-Identifier: GPL-2.0
source ../tc_police_scale.sh

tc_police_get_target()
{
	local should_fail=$1; shift
	local target

	target=$(devlink_resource_size_get global_policers single_rate_policers)

	if ((! should_fail)); then
		echo $target
	else
		echo $((target + 1))
	fi
}

```
