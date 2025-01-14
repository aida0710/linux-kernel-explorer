---
sidebar_position: 107
---
# test_xdp_vlan_mode_native.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/test_xdp_vlan_mode_native.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

# Exit on failure
set -e

# Wrapper script to test native-XDP
export TESTNAME=xdp_vlan_mode_native
./test_xdp_vlan.sh --mode=xdpdrv

```
