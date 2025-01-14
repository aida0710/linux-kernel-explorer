---
sidebar_position: 12
---
# hid-sony.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/hid/hid-sony.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs tests for the HID subsystem

export TARGET=test_sony.py

bash ./run-hid-tools-tests.sh

```
