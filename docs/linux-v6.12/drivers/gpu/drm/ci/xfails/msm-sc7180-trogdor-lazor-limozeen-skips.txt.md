---
sidebar_position: 42
---
# msm-sc7180-trogdor-lazor-limozeen-skips.txt

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/xfails/msm-sc7180-trogdor-lazor-limozeen-skips.txt`

### コンテンツ

```txt
# Suspend to RAM seems to be broken on this machine
.*suspend.*

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

```
