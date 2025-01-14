---
sidebar_position: 5
---
# port_scale.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/mlxsw/spectrum/port_scale.sh`

### コンテンツ

```sh
# SPDX-License-Identifier: GPL-2.0
source ../port_scale.sh

port_get_target()
{
	local should_fail=$1
	local target

	target=$(devlink_resource_size_get physical_ports)

	if ((! should_fail)); then
		echo $target
	else
		echo $((target + 1))
	fi
}

```
