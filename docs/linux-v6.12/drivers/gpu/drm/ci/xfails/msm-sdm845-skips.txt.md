---
sidebar_position: 45
---
# msm-sdm845-skips.txt

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/xfails/msm-sdm845-skips.txt`

### コンテンツ

```txt
# Hangs machine
kms_bw.*

# Failing due to a bootloader/fw issue. The workaround in mesa CI involves these two patches
# https://gitlab.freedesktop.org/gfx-ci/linux/-/commit/4b49f902ec6f2bb382cbbf489870573f4b43371e
# https://gitlab.freedesktop.org/gfx-ci/linux/-/commit/38cdf4c5559771e2474ae0fecef8469f65147bc1
msm/msm_mapping@*

# Skip driver specific tests
^amdgpu.*
nouveau_.*
^panfrost.*
^v3d.*
^vc4.*
^vmwgfx*

# Skip intel specific tests
gem_.*
i915_.*
tools_test.*

# Currently fails and causes coverage loss for other tests
# since core_getversion also fails.
core_hotunplug.*

# Whole machine hangs
kms_cursor_crc.*

```
