---
sidebar_position: 98
---
# sch_tbf_ets.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/forwarding/sch_tbf_ets.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

QDISC="ets strict"
: ${lib_dir:=.}
source $lib_dir/sch_tbf_etsprio.sh

```
