---
sidebar_position: 51
---
# ip_local_port_range.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/ip_local_port_range.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

./in_netns.sh \
  sh -c 'sysctl -q -w net.ipv4.ip_local_port_range="40000 49999" && ./ip_local_port_range'

```
