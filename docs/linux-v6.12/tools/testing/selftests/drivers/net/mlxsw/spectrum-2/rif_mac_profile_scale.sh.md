---
sidebar_position: 6
---
# rif_mac_profile_scale.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/mlxsw/spectrum-2/rif_mac_profile_scale.sh`

### コンテンツ

```sh
# SPDX-License-Identifier: GPL-2.0
source ../rif_mac_profile_scale.sh

rif_mac_profile_get_target()
{
	local should_fail=$1
	local target

	target=$(devlink_resource_size_get rif_mac_profiles)

	if ((! should_fail)); then
		echo $target
	else
		echo $((target + 1))
	fi
}

```
