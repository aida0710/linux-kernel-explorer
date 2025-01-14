---
sidebar_position: 122
---
# vxlan_bridge_1d_port_8472.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/forwarding/vxlan_bridge_1d_port_8472.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

# A wrapper to run VXLAN tests with an unusual port number.

VXPORT=8472
ALL_TESTS="
	ping_ipv4
"
source vxlan_bridge_1d.sh

```
