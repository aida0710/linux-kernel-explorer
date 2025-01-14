---
sidebar_position: 57
---
# sch_tbf_ets.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/mlxsw/sch_tbf_ets.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

sch_tbf_pre_hook()
{
	bail_on_lldpad "configure DCB" "configure Qdiscs"
}

lib_dir=$(dirname $0)/../../../net/forwarding
TCFLAGS=skip_sw
source $lib_dir/sch_tbf_ets.sh

```
