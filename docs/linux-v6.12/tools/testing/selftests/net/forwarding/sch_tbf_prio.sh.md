---
sidebar_position: 100
---
# sch_tbf_prio.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/forwarding/sch_tbf_prio.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

QDISC="prio bands"
: ${lib_dir:=.}
source $lib_dir/sch_tbf_etsprio.sh

```
