---
sidebar_position: 123
---
# vxlan_bridge_1d_port_8472_ipv6.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/forwarding/vxlan_bridge_1d_port_8472_ipv6.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

# A wrapper to run VXLAN tests with an unusual port number.

VXPORT=8472
ALL_TESTS="
	ping_ipv4
	ping_ipv6
"
source vxlan_bridge_1d_ipv6.sh

```
