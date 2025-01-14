---
sidebar_position: 3
---
# mirror_gre_scale.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/mlxsw/spectrum/mirror_gre_scale.sh`

### コンテンツ

```sh
# SPDX-License-Identifier: GPL-2.0
source ../mirror_gre_scale.sh

mirror_gre_get_target()
{
	local should_fail=$1; shift
	local target

	target=$(devlink_resource_size_get span_agents)

	if ((! should_fail)); then
		echo $target
	else
		echo $((target + 1))
	fi
}

```
