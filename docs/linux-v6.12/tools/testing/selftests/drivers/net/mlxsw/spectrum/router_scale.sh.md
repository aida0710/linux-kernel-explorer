---
sidebar_position: 10
---
# router_scale.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/mlxsw/spectrum/router_scale.sh`

### コンテンツ

```sh
# SPDX-License-Identifier: GPL-2.0
source ../router_scale.sh

router_get_target()
{
	local should_fail=$1
	local target

	target=$(devlink_resource_size_get kvd hash_single)

	if [[ $should_fail -eq 0 ]]; then
		target=$((target * 85 / 100))
	else
		target=$((target + 1))
	fi

	echo $target
}

```
